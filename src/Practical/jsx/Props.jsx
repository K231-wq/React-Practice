import PropTypes from 'prop-types';

function Props(prop){
    const category = prop.category;
    const itemList = prop.items;


    // itemList.sort((a, b) => a.name.localeCompare(b.name));
    // itemList.sort((a, b) => b.name.localeCompare(a.name));
    // itemList.filter((item) => item >= 100);
    //itemList.filer((item) => item < 100);
    const maxItem = itemList.reduce((max, fruit) => {
        return parseInt(fruit.calories) > parseInt(max.calories) ?  fruit: max
    }, itemList[0]);

    const minItem = itemList.reduce((max, nex) => {
        return parseInt(nex.calories) < parseInt(max.calories) ? nex : max 
    }, itemList[0]);

    const listItems = itemList.map((item) => <li key={item.id}>{item.name} &nbsp;Calories: 
                                        <b>{item.calories}</b></li>)
    
    return (<>
    <h2 className='items_category'>{category}</h2>
        <ul className='list-gp'>
            {listItems}
        </ul>
    <p >Maximum Calories {category}: <b>{maxItem.name}</b></p>
    <p>Minimum Calories {category}: <b>{minItem.name}</b></p>
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