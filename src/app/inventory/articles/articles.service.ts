import { Injectable, OnInit } from '@angular/core';
import { article } from 'src/models/article.model';
import { article_category } from 'src/models/article_category.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, Subject, throwError } from 'rxjs';
import { Iarticle } from 'src/interfaces/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService implements OnInit {

  helperArticle:article;

  articles:article[]=[];
  private articles$:Subject<article[]>;

  BaseUrl:string = 'http://localhost:80/BELLA1.0/belladev1.0/articles/class/articles.controller.php';

  // por ahora se traeran las categorias por aqui
  article_categories:article_category[]=[
    new article_category(0,"camisas", "camisas de todas las tallas", 0, "root"),
    new article_category(1,"camisas manga larga", "camisas de vestir", 0, 1),
    new article_category(2,"camisas manga corta", "camisas casuales", 0, 1),
    new article_category(3,"pantalones", "pantalones de todas las tallas", 0, "root"),
  ]; 

  constructor(private httpClient:HttpClient) {
    this.articles$ = new Subject();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.articles$.unsubscribe();
  }

  // halfway done, lacks refresh, something wrong with the refresh by observer
  AddArticleService(article:article):Observable<any>{
    let data = { 
      'option':2,
      'article':article
    };

    this.articles.push(article);
    this.articles$.next(this.articles);
    return this.httpClient.post(this.BaseUrl, data);
  }

  // observable
  GetAllArticlesService$():Observable<article[]>{
    return this.articles$.asObservable();
  }

  // non observable
   GetAllArticlesService(offset:number=0):Observable<article[]>{
    //posiblemente bien 
    console.log("page in service: "+offset);
    this.articles = [];
     let data = { 
      'option':1,
      'offset':offset
    };
    return this.httpClient.post<Iarticle[]>(this.BaseUrl, data);
  }

  IterateArticlesService(articles:Iarticle[]){
    this.articles = [];
    articles.forEach( e => {
      
      let newArticle = new article(e.id, e.name,e.description);
      
      this.articles.push(newArticle);
    })
    this.articles$.next(this.articles);
  }

  // working properly
  GetArticleService(id:number) {
    let data = { 
      'option':4,
      'id':id
    };
    return this.httpClient.post<article>(this.BaseUrl, data);
  }

  UpdateArticleService(article:article){
    let data = { 
      'option':5,
      'article':article
    };

    this.articles = this.articles.filter(articles => articles.id !== article.id);
    this.articles.push(article);
    this.articles$.next(this.articles); 
    return this.httpClient.post(this.BaseUrl, data);
  }

  SoftDeleteArticleService(id:number, index:number) {
    let data = { 
      'option':3,
      'id':id
    };

    this.articles = this.articles.filter(article => article.id !== id);
    this.articles$.next(this.articles);
    return this.httpClient.post(this.BaseUrl, data, {responseType: 'text'} );
  }
   
  SearchArticleService(search:string){
    let data = {
      'option':6,
      'search':search
    }
    return this.httpClient.post<article[]>(this.BaseUrl, data);
  }

  Paginate(){
    let data={
      'option':7,
    }
    return this.httpClient.post<number>(this.BaseUrl, data);
  }
}
