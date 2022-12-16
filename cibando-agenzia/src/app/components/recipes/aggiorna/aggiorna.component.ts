import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-aggiorna',
  templateUrl: './aggiorna.component.html',
  styleUrls: ['./aggiorna.component.scss']
})
export class AggiornaComponent implements OnInit {

  Editor = ClassicEditorBuild;

  editorConfig = {
    toolbar: {
        items: [
            'bold',
            '|',
            'italic',
            '|',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'undo',
            'redo',
        ]
    },
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    height: 300,
};

  id: string;

  form = new FormGroup({
    title: new FormControl(''),
    description:  new FormControl(''),
    image:  new FormControl(''),
    difficulty:  new FormControl(0),
    published:  new FormControl(false)
  })

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.onGetRecipe();
  }

  onGetRecipe(){
    this.activatedRoute.params.subscribe((urlParams) => {
      const id = urlParams['_id'];
          this.recipeService.getRecipe(id).subscribe({
            next: (res) => {
              this.id = res._id;
              this.form.patchValue({
                title: res.title,
                description:  res.description,
                image:  res.image,
                difficulty:  res.difficulty,
                published:  res.published
              })
            },
            error: (err) => {
              console.log(err)
            }
          })
       }
    )
  }


  onSubmit(){
    this.recipeService.modifyRecipe(this.id, this.form.value).subscribe({
      next: (res) => {
        this.router.navigate(['ricette']);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


}
