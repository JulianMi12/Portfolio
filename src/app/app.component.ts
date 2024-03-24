import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Tag } from './entity/tag';
import { TagService } from './services/tag.service';
import { HeadComponent } from './head/head.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [
        TagService
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, HttpClientModule, HeadComponent, AboutComponent, SkillsComponent, ProjectsComponent, ExperienceComponent]
})
export class AppComponent implements OnInit {
  public tags: Tag[];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    // this.getTags();
  }

  public getTags(): void {
    this.tagService.getTags().subscribe(
      (response: Tag[]) => {
        this.tags = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getTag(lan: string, tag: string): string {
    this.tagService.getTag(lan, tag).subscribe(
      (response: string) => {
        tag = response;
      },
      (error: HttpErrorResponse) => {
        // alert(error.message);
      }
    );
    return tag;
  }
}