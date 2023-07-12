import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HeaderFour, HeaderTwo } from 'components/Headers/Header-1';
import { Navigation } from 'components/Navigation/Navigation'
import { addItem, FoodItem ,  removeItem, updateItem } from '../../store/foodSlice';
import { AppDispatch, RootState } from '../../store/store';

export default function QuickStart() {
  const dispatch = useDispatch<AppDispatch>();
  const foodList = useSelector((state: RootState) => state.food.items);
  const [currentFood, setCurrentFood] = React.useState<string>('');
  const [selectedFood, setSelectedFood] = React.useState<FoodItem | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFood) {
      dispatch(updateItem({ ...selectedFood, name: currentFood }));
      setSelectedFood(null);
    } else {
      dispatch(addItem(currentFood));
    }
    setCurrentFood('');
  };

  return (
    <>
      <Navigation/>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl text-center px-4">
          <div className="mx-auto place-self-center">
            <HeaderTwo heading="Create your food inventory" />
            <HeaderFour heading='Input your ingredients in your fridge, cupboards and freezer and anywhere else you might store food that you want to cook with.' />
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={currentFood}
                  onChange={(e) => setCurrentFood(e.target.value)}
                  placeholder="Enter food item"
                  className='border border-gray-300 dark:border-gray-700 rounded-md p-2 mr-2'
                />
                <button 
                  type="submit" 
                  className='bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2'
                >{selectedFood ? 'Update' : 'Add'} food item</button>
              </form>

              <ul 
                className='flex flex-col mt-4'
              >
                {foodList.map((food) => (
                  <li 
                    key={food.id}
                    className='border border-gray-300 dark:border-gray-700 rounded-md p-2 mb-2 flex justify-between items-center'
                  >
                    <div>
                      {food.name}
                    </div>
                    <div>
                      <button 
                        onClick={() => {
                          setCurrentFood(food.name);
                          setSelectedFood(food);
                        }}
                        className='rounded-md p-2 mr-2'
                      >Edit</button>
                      <button 
                        onClick={() => dispatch(removeItem(food.id))}
                        className='bg-red-500 hover:bg-red-600 text-white rounded-md p-2'
                        >Remove</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
