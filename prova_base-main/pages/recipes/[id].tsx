import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Recipe } from '../../public/types';

interface RecipeProps {
  recipe: Recipe;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'public', 'recipes.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const recipes: Recipe[] = JSON.parse(jsonData);

  const paths = recipes.map((recipe) => ({
    params: { id: recipe.id },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<RecipeProps> = async ({ params }) => {
  const filePath = path.join(process.cwd(), 'public', 'recipes.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const recipes: Recipe[] = JSON.parse(jsonData);
  const recipe = recipes.find((r) => r.id === params?.id);

  if (!recipe) {
    return {
      notFound: true,
    };
  }

  return { props: { recipe } };
}

const Recipe = ({ recipe }: RecipeProps) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} style={{ display: 'block', margin: '0 auto 30px', maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
      <h2>Ingredientes</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instruções</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{instruction}</li>
        ))}
      </ol>

      {/* Botão para voltar */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link href="/recipes">
          <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', fontSize: '16px', cursor: 'pointer', display: 'inline-block', transition: 'background-color 0.3s' }}>
            Voltar para Receitas
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Recipe;
