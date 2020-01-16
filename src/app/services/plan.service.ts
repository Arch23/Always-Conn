import { Injectable } from '@angular/core';
import { Plan } from '../entities/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private plans: Plan[]

  constructor() {
    this.plans = [
      {
        'id': 1,
        'name': 'Plan 1',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a turpis efficitur, laoreet elit id, tempor arcu. Etiam eget viverra turpis, ac iaculis urna. Phasellus gravida blandit accumsan. Curabitur lorem magna, fringilla eget justo non, facilisis scelerisque odio. Sed pulvinar nisi ac dolor maximus venenatis. Ut feugiat urna tincidunt odio blandit, a vehicula metus sodales. Sed suscipit leo consectetur, aliquam tellus vel, viverra justo. Fusce non magna sodales felis euismod interdum vitae ac risus. Nunc nec blandit elit. Nam ac nisi arcu. Etiam pretium ac libero eu congue. Proin fringilla, risus et efficitur consequat, orci purus imperdiet est, ut posuere nisi massa vel nisl. Aliquam erat volutpat. Sed rutrum sed lacus et accumsan.',
        'value': 10.99,
        'dataLimit': 10,
        'benefits': [
          'Fusce ut nisl id turpis',
          'Suspendisse sagittis, nunc id laoreet',
          'Pellentesque aliquam dui metus, in',
          'Praesent blandit eu sapien eget',
          'Pellentesque faucibus augue ac lacus'
        ]
      },
      {
        'id': 2,
        'name': 'Plan 2',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a turpis efficitur, laoreet elit id, tempor arcu. Etiam eget viverra turpis, ac iaculis urna. Phasellus gravida blandit accumsan. Curabitur lorem magna, fringilla eget justo non, facilisis scelerisque odio. Sed pulvinar nisi ac dolor maximus venenatis. Ut feugiat urna tincidunt odio blandit, a vehicula metus sodales. Sed suscipit leo consectetur, aliquam tellus vel, viverra justo. Fusce non magna sodales felis euismod interdum vitae ac risus. Nunc nec blandit elit. Nam ac nisi arcu. Etiam pretium ac libero eu congue. Proin fringilla, risus et efficitur consequat, orci purus imperdiet est, ut posuere nisi massa vel nisl. Aliquam erat volutpat. Sed rutrum sed lacus et accumsan.',
        'value': 20.99,
        'dataLimit': 20,
        'benefits': [
          'Fusce ut nisl id turpis',
          'Suspendisse sagittis, nunc id laoreet',
          'Pellentesque aliquam dui metus, in',
          'Praesent blandit eu sapien eget',
          'Pellentesque faucibus augue ac lacus'
        ]
      },
      {
        'id': 3,
        'name': 'Plan 3',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a turpis efficitur, laoreet elit id, tempor arcu. Etiam eget viverra turpis, ac iaculis urna. Phasellus gravida blandit accumsan. Curabitur lorem magna, fringilla eget justo non, facilisis scelerisque odio. Sed pulvinar nisi ac dolor maximus venenatis. Ut feugiat urna tincidunt odio blandit, a vehicula metus sodales. Sed suscipit leo consectetur, aliquam tellus vel, viverra justo. Fusce non magna sodales felis euismod interdum vitae ac risus. Nunc nec blandit elit. Nam ac nisi arcu. Etiam pretium ac libero eu congue. Proin fringilla, risus et efficitur consequat, orci purus imperdiet est, ut posuere nisi massa vel nisl. Aliquam erat volutpat. Sed rutrum sed lacus et accumsan.',
        'value': 40.99,
        'dataLimit': 50,
        'benefits': [
          'Fusce ut nisl id turpis',
          'Suspendisse sagittis, nunc id laoreet',
          'Pellentesque aliquam dui metus, in',
          'Praesent blandit eu sapien eget',
          'Pellentesque faucibus augue ac lacus'
        ]
      },
      {
        'id': 4,
        'name': 'Plan 4',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a turpis efficitur, laoreet elit id, tempor arcu. Etiam eget viverra turpis, ac iaculis urna. Phasellus gravida blandit accumsan. Curabitur lorem magna, fringilla eget justo non, facilisis scelerisque odio. Sed pulvinar nisi ac dolor maximus venenatis. Ut feugiat urna tincidunt odio blandit, a vehicula metus sodales. Sed suscipit leo consectetur, aliquam tellus vel, viverra justo. Fusce non magna sodales felis euismod interdum vitae ac risus. Nunc nec blandit elit. Nam ac nisi arcu. Etiam pretium ac libero eu congue. Proin fringilla, risus et efficitur consequat, orci purus imperdiet est, ut posuere nisi massa vel nisl. Aliquam erat volutpat. Sed rutrum sed lacus et accumsan.',
        'value': 40.99,
        'dataLimit': 50,
        'benefits': [
          'Fusce ut nisl id turpis',
          'Suspendisse sagittis, nunc id laoreet',
          'Pellentesque aliquam dui metus, in',
          'Praesent blandit eu sapien eget',
          'Pellentesque faucibus augue ac lacus'
        ]
      },
      {
        'id': 5,
        'name': 'Plan 5',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a turpis efficitur, laoreet elit id, tempor arcu. Etiam eget viverra turpis, ac iaculis urna. Phasellus gravida blandit accumsan. Curabitur lorem magna, fringilla eget justo non, facilisis scelerisque odio. Sed pulvinar nisi ac dolor maximus venenatis. Ut feugiat urna tincidunt odio blandit, a vehicula metus sodales. Sed suscipit leo consectetur, aliquam tellus vel, viverra justo. Fusce non magna sodales felis euismod interdum vitae ac risus. Nunc nec blandit elit. Nam ac nisi arcu. Etiam pretium ac libero eu congue. Proin fringilla, risus et efficitur consequat, orci purus imperdiet est, ut posuere nisi massa vel nisl. Aliquam erat volutpat. Sed rutrum sed lacus et accumsan.',
        'value': 60.99,
        'dataLimit': 70,
        'benefits': [
          'Fusce ut nisl id turpis',
          'Suspendisse sagittis, nunc id laoreet',
          'Pellentesque aliquam dui metus, in',
          'Praesent blandit eu sapien eget',
          'Pellentesque faucibus augue ac lacus'
        ]
      },
    ];
  }

  getPlans() {
    return this.plans;
  }

  getPlan(id: number){
    return this.plans.find(
      (plan: Plan) => plan.id == id
    );
  }
  
}
