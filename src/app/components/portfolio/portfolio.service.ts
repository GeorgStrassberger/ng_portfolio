import { Injectable } from '@angular/core';
import { Project } from './project/project.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private projects: Project[] = [
    new Project(
      'Docusaurus',
      ['React', 'JavaScript', 'Markdown', 'HTML', 'CSS'],
      'PROJECT_DOCUSAURUS_DESCRIPTION',
      '/assets/images/projects/docusaurus.620w-460h',
      'https://github.com/GeorgStrassberger/sysdocs',
      'https://docs.devops-zone.com/',
    ),
    new Project(
      'AI-Bots',
      ['Angular', 'Express', 'Tailwindcss', 'OpenAI-Api'],
      'PROJECT_AI_DESCRIPTION',
      '/assets/images/projects/ai-bots.620w-460h',
      'https://github.com/GeorgStrassberger/ai-portfolio',
      'https://bots.georg-strassberger.de/',
    ),
    new Project(
      'SlackClone',
      ['Angular', 'Firebase', 'ngMaterial'],
      'PROJECT_SLACK_DESCRIPTION',
      '/assets/images/projects/slackclone.620w-460h',
      'https://github.com/ImForsaken/My-slack-clone',
      'https://slackclone.georg-strassberger.de',
    ),
    new Project(
      'Join',
      ['Angular', 'Express', 'PostgreSQL'],
      'PROJECT_JOIN_DESCRIPTION',
      '/assets/images/projects/join.620w-460h',
      'https://github.com/GeorgStrassberger/ng_join',
      'https://join.georg-strassberger.de',
    ),
    new Project(
      'Photography',
      ['SCSS', 'CSS', 'HTML'],
      'PROJECT_PHOTOGRAPHY_DESCRIPTION',
      '/assets/images/projects/photography.620w-460h',
      'https://github.com/GeorgStrassberger/Photography-Project',
      'http://photography.georg-strassberger.de/',
    ),
    new Project(
      'El Pollo Loco',
      ['JavaScript', 'OOP', 'HTML', 'CSS'],
      'PROJECT_ELPOLLO_DESCRIPTION',
      '/assets/images/projects/epl.620w-460h',
      'https://github.com/GeorgStrassberger/El-Pollo-Loco',
      'http://el-pollo-loco.georg-strassberger.de/',
    ),
    new Project(
      'Ring of Fire',
      ['Angular', 'Firebase', 'TypeScript'],
      'PROJECT_RING_DESCRIPTION',
      '/assets/images/projects/rof.620w-460h',
      'https://github.com/GeorgStrassberger/ng_ringOfFire',
      'http://ring-of-fire.georg-strassberger.de/',
    ),
    new Project(
      'My Homepage',
      ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      'PROJECT_HOMEPAGE_DESCRIPTION',
      '/assets/images/projects/myPage.620w-460h',
      'https://github.com/GeorgStrassberger/myPortfolio',
      'https://www.georg-strassberger.de/',
    ),
    new Project(
      'Pokedex',
      ['Rest-Api', 'JavaScript', 'HTML', 'CSS'],
      'PROJECT_POKEDEX_DESCRIPTION',
      '/assets/images/projects/pokedex.620w-460h',
      'https://github.com/GeorgStrassberger/js_pokedex',
      'http://pokedex.georg-strassberger.de/',
    ),
    new Project(
      'TicTacToe',
      ['Vite', 'JavaScript', 'HTML', 'CSS'],
      'PROJECT_TICTACTOE_DESCRIPTION',
      '/assets/images/projects/tictactoe.620w-460h',
      'https://github.com/GeorgStrassberger/js_tic-tac-toe',
      'https://tictactoe.georg-strassberger.de/',
    ),
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects.slice();
  }

  getProject(index: number): Project {
    return this.projects.slice()[index];
  }
}
