-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enums
CREATE TYPE user_role AS ENUM ('admin', 'user', 'client');
CREATE TYPE project_status AS ENUM ('planning', 'in-progress', 'completed', 'on-hold');
CREATE TYPE task_status AS ENUM ('todo', 'in-progress', 'done');
CREATE TYPE task_priority AS ENUM ('low', 'medium', 'high');
CREATE TYPE service_category AS ENUM ('development', 'consulting', 'analytics', 'security');
CREATE TYPE job_type AS ENUM ('Full-time', 'Part-time', 'Contract');
CREATE TYPE job_status AS ENUM ('open', 'closed');
CREATE TYPE application_status AS ENUM ('pending', 'reviewed', 'interviewed', 'accepted', 'rejected');
CREATE TYPE partner_category AS ENUM ('technology', 'business', 'service');
CREATE TYPE analytics_type AS ENUM ('revenue', 'performance', 'engagement');
CREATE TYPE billing_period AS ENUM ('monthly', 'yearly', 'one-time');

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role user_role NOT NULL DEFAULT 'user',
    avatar_url TEXT,
    projects_completed INTEGER DEFAULT 0,
    tasks_in_progress INTEGER DEFAULT 0,
    next_meeting TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status project_status NOT NULL DEFAULT 'planning',
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP,
    client_id UUID REFERENCES users(id),
    progress INTEGER CHECK (progress BETWEEN 0 AND 100),
    budget_allocated DECIMAL(15,2) NOT NULL,
    budget_spent DECIMAL(15,2) DEFAULT 0,
    currency VARCHAR(3) DEFAULT 'USD',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Project Team Members (junction table)
CREATE TABLE project_team_members (
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, user_id)
);

-- Project Technologies (junction table)
CREATE TABLE project_technologies (
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    technology VARCHAR(100),
    PRIMARY KEY (project_id, technology)
);

-- Tasks table
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status task_status NOT NULL DEFAULT 'todo',
    priority task_priority NOT NULL DEFAULT 'medium',
    assignee_id UUID REFERENCES users(id),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    due_date TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Task Tags (junction table)
CREATE TABLE task_tags (
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    tag VARCHAR(50),
    PRIMARY KEY (task_id, tag)
);

-- Services table
CREATE TABLE services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category service_category NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Service Features table
CREATE TABLE service_features (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    service_id UUID REFERENCES services(id) ON DELETE CASCADE,
    icon VARCHAR(50),
    title VARCHAR(255) NOT NULL,
    description TEXT
);

-- Service Pricing table
CREATE TABLE service_pricing (
    service_id UUID PRIMARY KEY REFERENCES services(id),
    amount DECIMAL(15,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    billing_period billing_period NOT NULL
);

-- Job Postings table
CREATE TABLE job_postings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    department VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    type job_type NOT NULL,
    salary DECIMAL(15,2),
    experience INTEGER,
    description TEXT,
    status job_status DEFAULT 'open',
    posted_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Job Requirements (junction table)
CREATE TABLE job_requirements (
    job_id UUID REFERENCES job_postings(id) ON DELETE CASCADE,
    requirement TEXT,
    PRIMARY KEY (job_id, requirement)
);

-- Job Benefits (junction table)
CREATE TABLE job_benefits (
    job_id UUID REFERENCES job_postings(id) ON DELETE CASCADE,
    benefit TEXT,
    PRIMARY KEY (job_id, benefit)
);

-- Job Applications table
CREATE TABLE job_applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    job_id UUID REFERENCES job_postings(id) ON DELETE CASCADE,
    applicant_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    resume_url TEXT NOT NULL,
    cover_letter TEXT,
    status application_status DEFAULT 'pending',
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Attachments table
CREATE TABLE attachments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    filename VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    type VARCHAR(50),
    size INTEGER,
    uploaded_by UUID REFERENCES users(id),
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Task Attachments (junction table)
CREATE TABLE task_attachments (
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    attachment_id UUID REFERENCES attachments(id) ON DELETE CASCADE,
    PRIMARY KEY (task_id, attachment_id)
);

-- Testimonials table
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    quote TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    company VARCHAR(255),
    image_url TEXT,
    rating INTEGER CHECK (rating BETWEEN 1 AND 5),
    verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Partners table
CREATE TABLE partners (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    logo_url TEXT,
    website TEXT,
    category partner_category NOT NULL,
    description TEXT,
    active BOOLEAN DEFAULT true,
    since DATE NOT NULL
);

-- Analytics table
CREATE TABLE analytics_data (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id),
    service_id UUID REFERENCES services(id),
    type analytics_type NOT NULL,
    period_start TIMESTAMP NOT NULL,
    period_end TIMESTAMP NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Analytics Metrics table
CREATE TABLE analytics_metrics (
    analytics_id UUID REFERENCES analytics_data(id) ON DELETE CASCADE,
    name VARCHAR(100),
    value DECIMAL(15,2),
    unit VARCHAR(50),
    PRIMARY KEY (analytics_id, name)
);

-- Triggers for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for all tables with updated_at
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tasks_updated_at
    BEFORE UPDATE ON tasks
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at
    BEFORE UPDATE ON services
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 