package com.projet.back.controller;


import com.projet.back.model.Article;
import com.projet.back.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/articles")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping
    public List<Article> getAllArticles() {
        return articleService.getAllArticles();
    }

    @GetMapping("/aa")
    public Optional<Article> getArticleById(@PathVariable Long id) {
        return articleService.getArticleById(id);
      
    }
    @GetMapping("/aaa")
    public String getMethodName() {
        return new String("hello st2i 2024 !");
    }

    @PostMapping
    public Article createArticle(@RequestBody Article article) {
        return articleService.createArticle(article);
    }

    @PutMapping("/{id}")
    public Optional<Article> updateArticle(@PathVariable Long id, @RequestBody Article articleDetails) {
        return articleService.updateArticle(id, articleDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteArticle(@PathVariable Long id) {
        articleService.deleteArticle(id);
    }
}


