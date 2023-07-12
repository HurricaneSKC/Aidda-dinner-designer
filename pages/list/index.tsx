import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HeaderTwo } from 'components/Headers/Header-1';
import { Navigation } from 'components/Navigation/Navigation';
import { FoodItem } from '../../store/foodSlice';
import { RootState } from '../../store/store';

// This component displays each food item
const CategoryComponent: React.FC<{ category: string; items: string[] }> = ({ category, items }) => (
  <div>
    <h2>{category}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

interface CategorizedFoodList {
  [category: string]: string[];
}

const ListPage = () => {
  const foodList = useSelector((state: RootState) => state.food.items);
  const [categorizedFoodList, setCategorizedFoodList] = useState<CategorizedFoodList>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/categorizedFoodList', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ foodList }),
      });
      const data = await res.json();
      setCategorizedFoodList(data.categorizedFoodList);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [foodList]);

  const mockFetchData = () => {
    setLoading(true);
    try {
      const data = {
        categorizedFoodList: {
          'Fruit': ['Apple', 'Banana', 'Orange'],
          'Vegetables': ['Carrot', 'Potato', 'Broccoli'],
          'Meat': ['Chicken', 'Beef', 'Pork'],
        },
      };
      setCategorizedFoodList(data.categorizedFoodList);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      mockFetchData();
    } else if (process.env.NODE_ENV === 'production') {
      fetchData();
    } 
  }, [fetchData]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navigation 
        additionalNavItems={[
          { text: 'Features', href: '/features' },
        ]}
      />
    <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl text-center px-4">
          <div className="mx-auto place-self-center">
          <HeaderTwo heading="Food inventory" />
          </div>
          <div className='flex justify-around'>
            {categorizedFoodList && Object.entries(categorizedFoodList).map(([category, items]) => (
              <CategoryComponent key={category} category={category} items={items} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ListPage;
