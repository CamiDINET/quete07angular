import { Component, Input } from '@angular/core';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  // model: Skill = new Skill("", "", "");

@Input() skill! : Skill;






}