import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { article } from 'src/models/article.model';
import { article_category } from 'src/models/article_category.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles:article[]=[
    new article(0, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(1, "samsung sXI", "samsung-sxi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(2, "samsung sXII", "samsung-sxii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(3, "samsung sXIII", "samsung-sxiii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(4, "samsung sXIV", "samsung-sxiv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(5, "samsung sXV", "samsung-sxv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(6, "samsung sXVI", "samsung-sxvi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(7, "samsung sXVII", "samsung-sxvii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(8, "samsung sXVIII", "samsung-sxviii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(9, "samsung sXX", "samsung-sxx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(10, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(11, "samsung sXI", "samsung-sxi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(12, "samsung sXII", "samsung-sxii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(13, "samsung sXIII", "samsung-sxiii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(14, "samsung sXIV", "samsung-sxiv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(15, "samsung sXV", "samsung-sxv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(16, "samsung sXVI", "samsung-sxvi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(17, "samsung sXVII", "samsung-sxvii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(18, "samsung sXVIII", "samsung-sxviii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(19, "samsung sXX", "samsung-sxx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(20, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(21, "samsung sXI", "samsung-sxi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(22, "samsung sXII", "samsung-sxii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(23, "samsung sXIII", "samsung-sxiii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(24, "samsung sXIV", "samsung-sxiv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(25, "samsung sXV", "samsung-sxv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(26, "samsung sXVI", "samsung-sxvi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(27, "samsung sXVII", "samsung-sxvii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(28, "samsung sXVIII", "samsung-sxviii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(29, "samsung sXX", "samsung-sxx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(30, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(31, "samsung sXI", "samsung-sxi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(32, "samsung sXII", "samsung-sxii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(33, "samsung sXIII", "samsung-sxiii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(34, "samsung sXIV", "samsung-sxiv", "asasf", 4, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(35, "samsung sXV", "samsung-sxv", "asasf", 1,"asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(36, "samsung sXVI", "samsung-sxvi", "asasf", 3, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(37, "samsung sXVII", "samsung-sxvii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(38, "samsung sXVIII", "samsung-sxviii", "asas3", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(39, "samsung sXX", "samsung-sxx", "asasf", 1,"asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
  ];
  // por ahora se traeran las categorias por aqui
  article_categories:article_category[]=[
    new article_category(1,"camisas", "camisas de todas las tallas", 1),
    new article_category(1,"pantalones", "pantalones de todas las tallas", 1),
    new article_category(1,"televisores", "televisores de todss los tamaños", 1),
    new article_category(1,"camaras", "camaras de todo tipo", 1),
  ];

  constructor() { }

  AddArticleService(article:article){
    this.articles.push(article);
  }

  DeleteArticleService(id:number){
    if(window.confirm("Desea borrar el Articulo?")){
      for(let i = 0; i < this.articles.length; ++i){
        if (this.articles[i].id == id){
          this.articles.splice(i,1);
        }
      }
    }
  }

  GetArticleService(id:number):article | null{

    for(let i = 0; i < this.articles.length; ++i){
      if (this.articles[i].id == id){
        let helper = this.articles[i];
        return helper;
      }
    }
    return null;
  }

  UpdateArticleService(form:FormGroup /* article:article */){
    for(let i = 0; i < this.articles.length; ++i){
      /* 
      if(this.articles[i].id == article.id){
        this.articles[i].id = article.id,
        this.articles[i].id = article.id,
        this.articles[i].name = article.name,
        this.articles[i].slug = article.slug, 
        this.articles[i].description = article.description, 
        this.articles[i].status = article.status, 
        this.articles[i].bar_code = article.bar_code,  
        this.articles[i].sku = article.sku,  
        this.articles[i].comments = article.comments,  
        this.articles[i].size = article.size,  
        this.articles[i].weight = article.weight,  
        this.articles[i].made_in = article.made_in,
        this.articles[i].brand_id = article.brand_id,
        this.articles[i].category_id = article.category_id,
        this.articles[i].unit_id = article.unit_id
      }
      */
      if(this.articles[i].id == form.get('id')!.value){
        this.articles[i].id = form.get('id')!.value;
        this.articles[i].name = form.get('name')!.value;
        this.articles[i].slug = form.get('slug')!.value; 
        this.articles[i].description = form.get('description')!.value; 
        this.articles[i].status = form.get('status')!.value; 
        this.articles[i].bar_code = form.get('bar_code')!.value;  
        this.articles[i].sku = form.get('sku')!.value;  
        this.articles[i].comments = form.get('comments')!.value;  
        this.articles[i].size = form.get('size')!.value;  
        this.articles[i].weight = form.get('weight')!.value;  
        this.articles[i].made_in = form.get('made_in')!.value;
        this.articles[i].brand_id = form.get('brand_id')!.value;
        this.articles[i].category_id = form.get('category_id')!.value;
        this.articles[i].unit_id = form.get('unit_id')!.value;
      } 

    }
  }
}
