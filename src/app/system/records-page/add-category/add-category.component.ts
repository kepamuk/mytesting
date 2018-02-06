import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../../shared/services/categories.service';
import {Category} from '../../shared/models/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  f: NgForm;

  @Output() addedCategory: EventEmitter<Category> = new EventEmitter();

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    let {name, capacity} = f.value;

    if (capacity < 1) {
      capacity *= -1;
    }

    this.categoriesService.addCategory(new Category(name, capacity))
      .subscribe((category: Category) => {
        f.reset();
        f.form.patchValue({
          capacity: 1
        });
        this.addedCategory.emit(category);
      });
  }
}
