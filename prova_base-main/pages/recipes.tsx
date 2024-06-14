import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Recipe } from '../public/types';
import '../app/globals.css'

interface RecipesProps {
  recipes: Recipe[];
}

export const getStaticProps: GetStaticProps<RecipesProps> = async () => {
  const filePath = path.join(process.cwd(), 'public', 'recipes.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const recipes: Recipe[] = JSON.parse(jsonData);

  return {
    props: {
      recipes,
    },
  };
}

const Recipes = ({ recipes }: RecipesProps) => {
  return (
    <div>
      <h1>Receitas</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipes/${recipe.id}`} legacyBehavior>
              <a>
                <img src={recipe.image} alt={recipe.name} style={{ width: '200px' }} />
                <h2>{recipe.name}</h2>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="./">
          <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', fontSize: '16px', cursor: 'pointer', display: 'inline-block', transition: 'background-color 0.3s' }}>
            Home
          </button>
        </Link>
    </div>
  );
}

export default Recipes;
