// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Page object type
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    content?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    subtitle?: string;
    cta_text?: string;
    cta_link?: string;
  };
}

// Service object type
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    description?: string;
    icon?: string;
    features?: string[];
    image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name?: string;
    location?: string;
    rating?: number;
    testimonial?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Project object type
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    description?: string;
    location?: string;
    completion_date?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    highlights?: string[];
  };
}

// Company Info object type
export interface CompanyInfo extends CosmicObject {
  type: 'company-info';
  metadata: {
    company_name?: string;
    tagline?: string;
    phone?: string;
    email?: string;
    address?: string;
    mission?: string;
    values?: string[];
    social_links?: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
    };
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isPage(obj: CosmicObject): obj is Page {
  return obj.type === 'pages';
}

export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

export function isCompanyInfo(obj: CosmicObject): obj is CompanyInfo {
  return obj.type === 'company-info';
}