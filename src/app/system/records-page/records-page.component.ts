import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../shared/services/categories.service';
import {Category} from '../shared/models/category.model';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {

  categories: Category[] = [];
  isLoaded = false;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.categoriesService.getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        this.isLoaded = true;
      });
  }

  onAddCategory(category: Category) {
    this.categories.push(category);
  }

  onUpdateCategory(updatedCat: Category) {
    this.categories = this.categories.map((c) => {
      if (c.id === updatedCat.id) {
        return {
          name: updatedCat.name,
          capacity: updatedCat.capacity,
          id: updatedCat.id
        };
      } else {
        return c;
      }
    });
  }

}
