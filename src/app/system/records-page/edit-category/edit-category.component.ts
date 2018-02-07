import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../shared/models/category.model';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../../shared/services/categories.service';
import {Message} from '../../../shared/model/message.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  @Input() categories;
  @Output() updatedCategories = new EventEmitter<any>();

  currentId = 1;
  currentCat: Category;

  message: Message;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.message = new Message('success', '');
    this.onChange();
  }

  onChange() {
    this.currentCat = this.categories.find((c) => {
      return c.id === +this.currentId;
    });
  }

  onSubmit(f: NgForm) {
    let {name, capacity} = f.form.value;
    if (capacity < 0) {
      capacity *= -1;
    }
    const category = new Category(name, capacity, +this.currentId);

    this.categoriesService.updateCategory(category)
      .subscribe((category: Category) => {
        this.message = new Message('success', 'Категория переделана');
        this.updatedCategories.emit(category);

        window.setTimeout(() => {
          this.message = new Message('success', '');
        }, 2000);
      });
  }
}
