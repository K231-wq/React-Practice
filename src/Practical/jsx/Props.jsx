import PropTypes from 'prop-types';

function Props(prop){
    const category = prop.category;
    const itemList = prop.items;


    // itemList.sort((a, b) => a.name.localeCompare(b.name));
    // itemList.sort((a, b) => b.name.localeCompare(a.name));
    // itemList.filter((item) => item >= 100);
    //itemList.filer((item) => item < 100);
    const maxItem = itemList.reduce((max, fruit) => {return fruit.calories > max.calories ?  fruit: max}, itemList[0]);

    const listItems = itemList.map((item) => <li key={item.id}>{item.name} &nbsp;Calories: 
                                        <b>{item.calories}</b></li>)
    
    return (<>
    <h2 className='items_category'>{category}</h2>
        <ul className='list-gp'>
            {listItems}
        </ul>
        {maxItem.name}
    </>);
}
Props.prototype = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}
Props.defaultProps = {
    category: "Category",
    items: [],
}

export default Props;