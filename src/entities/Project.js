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
    
    // App store links for mobile apps
    this.app_store_url = data.app_store_url || null;
    this.google_play_url = data.google_play_url || null;
    
    // Additional fields for internal use
    this.id = data.id || Math.random().toString(36).substr(2, 9);
    this.created_date = data.created_date || new Date().toISOString();
  }

  static async list(sortBy = '-created_date') {
    // Mock project data based on Zainab's actual projects
    const mockProjects = [
      {
        id: '1',
        title: 'Cvati.com - Professional Career Platform',
        description: 'A sophisticated web platform for creating professional CVs with AI-powered content suggestions, multiple templates, and export capabilities. Features real-time editing and collaborative tools.',
        technologies: ['React', 'Node.js', 'Postgres', 'AI/ML', 'Docker', 'JavaScript', 'Celery', 'Redis', 'AWS', 'FastAPI' ],
        demo_url: 'https://cvati.com',
        github_url: '',
        image_url: '/assets/logo2.png',
        featured: true,
        created_date: '2025-04-10'
      },
      {
        id: '2',
        title: 'Giggli Spectrum Autism',
        description: 'Educational mobile app designed to support children with autism through interactive learning modules, progress tracking, and personalized therapy activities.',
        technologies: ['Kotlin', 'SwiftUI', 'Firebase' ],
        github_url: '',
        demo_url: null,
        image_url: '/assets/logo3.png',
        app_store_url: 'https://apps.apple.com/se/app/giggli-spectrum-autism/id1629904859',
        google_play_url: ' ',
        featured: true,
        created_date: '2022-02-02'
      },
      {
        id: '3',
        title: 'Cosmetics Checker',
        description: 'Mobile app that helps users check cosmetic ingredients for safety, compatibility with skin types, and potential allergen warnings.',
        technologies: ['Flutter', 'Dart', 'REST API'],
        github_url: '',
        demo_url: null,
        image_url: '/assets/logo5.png',
        app_store_url: 'https://apps.apple.com/us/app/cosmetics-checker/id6447474601',
        google_play_url: 'https://play.google.com/store/apps/details?id=com.zainabadnan.scanmylotions',
        featured: true,
        created_date: '2023-03-10'
      },
      {
        id: '4',
        title: 'Check My Food Ingredients',
        description: 'Food ingredient analysis app that provides detailed nutritional information, allergen warnings, and dietary compatibility checks.',
        technologies: ['Flutter', 'Dart' ,'REST API'],
        github_url: '',
        demo_url: null,
        image_url: '/assets/logo4.png',
        app_store_url: 'https://apps.apple.com/gb/app/check-my-food-ingredients/id6446487831',
        google_play_url: ' ',
        featured: true,
        created_date: '2023-03-10'
      },
      {
        id: '5',
        title: 'Mätkilen1 Bostadsförening',
        description: 'A simple website for a housing cooperative managing two modern residential buildings in Stockholm. It features a board meeting notices, annual meeting announcements, maintenance scheduling system, financial reports and community news updates.',
        technologies: ['React', 'Node.js', 'JavaScript' ],
        demo_url: 'http://matkilen1.se/',
        github_url: '',
        image_url: '/assets/logo6.jpg',
        featured: true,
        created_date: '2021-12-10'
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

  // Check if project is a mobile app (has app store links)
  isMobileApp() {
    return this.app_store_url || this.google_play_url;
  }

  // Get app store links
  getAppStoreLinks() {
    return {
      ios: this.app_store_url,
      android: this.google_play_url
    };
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
    
    if (this.app_store_url && typeof this.app_store_url !== 'string') {
      errors.push('App Store URL must be a string');
    }
    
    if (this.google_play_url && typeof this.google_play_url !== 'string') {
      errors.push('Google Play URL must be a string');
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