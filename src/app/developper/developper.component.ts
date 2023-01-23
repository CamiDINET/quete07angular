import { Component, Input } from '@angular/core';
import { Developper } from '../models/developper';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent{

  dev : Developper = new Developper("DOE", "John", 30, "men", "......", [
    new Skill("John", "🚀", "john.doe@live.com"),
  ]);


}
