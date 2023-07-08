const Products= () => {
    const categories = [
      { id: 1, name: 'Laptops' },
      { id: 2, name: 'Componentes' },
      { id: 3, name: 'Periféricos' },
    ];
  
    return (
      <section className="featured-categories">
        <h2>Categorías Destacadas</h2>
        <ul>
          {/* Muestra las categorías en forma de lista */}
          {categories.map((category) => (
            <li key={category.id}>
              <a href={`/category/${category.id}`}>{category.name}</a>
            </li>
          ))}
        </ul>
      </section>
    );
  };

export default Products;