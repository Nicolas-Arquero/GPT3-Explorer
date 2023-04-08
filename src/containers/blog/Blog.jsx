import React from "react";
import './blog.css'
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

function Blog() {
  return (
    <div className="gpt3__blog marginBlog" id="blog">      
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Il se passe beaucoup de choses, nous écrivons à ce sujet.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article 
            imgUrl={blog01}
            date="9 janvier 2023"
            title="Comment GPT-3 révolutionne l'écriture de contenu"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article 
            imgUrl={blog02}
            date="15 janvier 2023"
            title="Les chatbots alimentés par GPT-3 : une nouvelle ère de service client"
          />
          <Article 
            imgUrl={blog03}
            date="22 février 2023"
            title="GPT-3 : l'IA qui peut répondre à toutes vos questions"
          />
          <Article 
            imgUrl={blog04}
            date="1 mars 2023"
            title="Comment GPT-3 peut aider votre entreprise à mieux comprendre ses clients"
          />
          <Article 
            imgUrl={blog05}
            date="7 avril 2023"
            title="Les applications pratiques de GPT-3 dans l'industrie de la finance"
          />
        </div>
      </div>
    </div>
  )
}

export default Blog;
