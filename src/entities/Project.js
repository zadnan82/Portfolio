// src/entities/Project.js

export class Project {
  constructor(data = {}) {
    // Validate required fields
    if (!data.title || !data.description) {
      throw new Error('Project must have title and description');
    }

    // Map according to the schema
    this.title = data.title;
    this.description = data.description;
    this.technologies = data.technologies || [];
    this.github_url = data.github_url || null;
    this.demo_url = data.demo_url || null;
    this.image_url = data.image_url || null;
    this.featured = data.featured || false;
    
    // Additional fields for internal use
    this.id = data.id || Math.random().toString(36).substr(2, 9);
    this.created_date = data.created_date || new Date().toISOString();
  }

  static async list(sortBy = '-created_date') {
    // Mock project data based on Zainab's actual projects
    const mockProjects = [
      {
        id: '1',
        title: 'AI Customer Service Platform',
        description: 'Intelligent customer service platform powered by machine learning algorithms for automated response generation, sentiment analysis, and real-time chat support.',
        technologies: ['C#', '.NET Core', 'AI/ML', 'React', 'SQL Server', 'Azure'],
        github_url: 'https://github.com/zainab-portfolio/ai-customer-service',
        demo_url: null,
        image_url: null,
        featured: true,
        created_date: '2024-03-15T00:00:00Z'
      },
      {
        id: '2',
        title: 'Giggli Spectrum Autism',
        description: 'Educational mobile app designed to support children with autism through interactive learning modules, progress tracking, and personalized therapy activities.',
        technologies: ['Flutter', 'Dart', 'SQLite', 'Provider', 'Firebase'],
        github_url: 'https://github.com/zainab-portfolio/giggli-app',
        demo_url: null,
        image_url: null,
        featured: true,
        created_date: '2024-02-20T00:00:00Z'
      },
      {
        id: '3',
        title: 'Cosmetics Checker',
        description: 'Mobile app that helps users check cosmetic ingredients for safety, compatibility with skin types, and potential allergen warnings.',
        technologies: ['Flutter', 'Dart', 'REST API', 'SQLite', 'Barcode Scanner'],
        github_url: 'https://github.com/zainab-portfolio/cosmetics-checker',
        demo_url: null,
        image_url: null,
        featured: true,
        created_date: '2024-01-10T00:00:00Z'
      },
      {
        id: '4',
        title: 'Check My Food Ingredients',
        description: 'Food ingredient analysis app that provides detailed nutritional information, allergen warnings, and dietary compatibility checks.',
        technologies: ['Flutter', 'Dart', 'Food API', 'SQLite', 'Machine Learning'],
        github_url: 'https://github.com/zainab-portfolio/food-checker',
        demo_url: null,
        image_url: null,
        featured: true,
        created_date: '2023-12-05T00:00:00Z'
      },
      {
        id: '5',
        title: 'E-Commerce Management Platform',
        description: 'Comprehensive e-commerce solution with inventory management, order processing, customer analytics, and multi-payment gateway integration.',
        technologies: ['C#', '.NET Core', 'React', 'SQL Server', 'Stripe API', 'Azure'],
        github_url: 'https://github.com/zainab-portfolio/ecommerce-platform',
        demo_url: 'https://ecommerce-demo.zainabadnan.com',
        image_url: null,
        featured: false,
        created_date: '2023-11-15T00:00:00Z'
      },
      {
        id: '6',
        title: 'Real Estate Management System',
        description: 'Property management platform with tenant tracking, lease management, maintenance scheduling, and comprehensive financial reporting.',
        technologies: ['C#', '.NET Core', 'SQL Server', 'React', 'Bootstrap', 'Crystal Reports'],
        github_url: 'https://github.com/zainab-portfolio/real-estate-system',
        demo_url: null,
        image_url: null,
        featured: false,
        created_date: '2023-10-20T00:00:00Z'
      },
      {
        id: '7',
        title: 'Machine Learning Analytics Dashboard',
        description: 'Advanced data visualization dashboard for ML model predictions with real-time analytics, performance metrics, and automated reporting.',
        technologies: ['Python', 'React', 'D3.js', 'TensorFlow', 'PostgreSQL', 'Docker'],
        github_url: 'https://github.com/zainab-portfolio/ml-dashboard',
        demo_url: 'https://ml-analytics.zainabadnan.com',
        image_url: null,
        featured: false,
        created_date: '2023-09-10T00:00:00Z'
      },
      {
        id: '8',
        title: 'Hotel Management Suite',
        description: 'Complete hospitality management solution with booking system, guest services, housekeeping coordination, and revenue optimization.',
        technologies: ['C#', '.NET', 'Oracle', 'WPF', 'Crystal Reports', 'Payment Gateway'],
        github_url: 'https://github.com/zainab-portfolio/hotel-management',
        demo_url: null,
        image_url: null,
        featured: false,
        created_date: '2023-08-05T00:00:00Z'
      },
      {
        id: '9',
        title: 'Mobile Customer Service App',
        description: 'Enterprise mobile application for customer service representatives with offline support, data synchronization, and real-time notifications.',
        technologies: ['Kotlin', 'Android', 'Room Database', 'Retrofit', 'Firebase', 'Push Notifications'],
        github_url: 'https://github.com/zainab-portfolio/mobile-customer-service',
        demo_url: null,
        image_url: null,
        featured: false,
        created_date: '2023-07-15T00:00:00Z'
      }
    ];

    // Convert to Project instances and validate schema
    const projects = mockProjects.map(data => {
      try {
        return new Project(data);
      } catch (error) {
        console.error('Invalid project data:', data, error);
        return null;
      }
    }).filter(project => project !== null);

    // Sort projects
    if (sortBy === '-created_date') {
      projects.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
    } else if (sortBy === 'created_date') {
      projects.sort((a, b) => new Date(a.created_date) - new Date(b.created_date));
    } else if (sortBy === 'title') {
      projects.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'featured') {
      projects.sort((a, b) => b.featured - a.featured);
    }

    // Simulate API delay
    return new Promise(resolve => {
      setTimeout(() => resolve(projects), 500);
    });
  }

  static async getById(id) {
    const projects = await this.list();
    return projects.find(project => project.id === id);
  }

  static async getFeatured() {
    const projects = await this.list();
    return projects.filter(project => project.featured);
  }

  // Validate project data against schema
  validate() {
    const errors = [];
    
    if (!this.title || typeof this.title !== 'string') {
      errors.push('Title is required and must be a string');
    }
    
    if (!this.description || typeof this.description !== 'string') {
      errors.push('Description is required and must be a string');
    }
    
    if (this.technologies && !Array.isArray(this.technologies)) {
      errors.push('Technologies must be an array');
    }
    
    if (this.github_url && typeof this.github_url !== 'string') {
      errors.push('GitHub URL must be a string');
    }
    
    if (this.demo_url && typeof this.demo_url !== 'string') {
      errors.push('Demo URL must be a string');
    }
    
    if (this.image_url && typeof this.image_url !== 'string') {
      errors.push('Image URL must be a string');
    }
    
    if (this.featured !== undefined && typeof this.featured !== 'boolean') {
      errors.push('Featured must be a boolean');
    }
    
    return errors;
  }

  save() {
    const validationErrors = this.validate();
    if (validationErrors.length > 0) {
      return Promise.reject(new Error('Validation failed: ' + validationErrors.join(', ')));
    }
    
    // In a real application, this would save to a database
    console.log('Saving project:', this);
    return Promise.resolve(this);
  }

  delete() {
    // In a real application, this would delete from a database
    console.log('Deleting project:', this.id);
    return Promise.resolve(true);
  }
}