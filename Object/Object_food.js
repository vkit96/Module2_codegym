let recipe ={
    'title': 'Suon xao chua ngot',
    'serving': 2,
    'ingredients':['400g suon than', '4 tpbs nuoc mam', '5tsp nuoc cot chanh', '1/3 bat nuoc soi']
};
console.log('Ten mon an: ' + recipe.title);
console.log('Khau phan an: ' + recipe.serving);
console.log('Thanh phan: ' );
for(var i = 0; i < recipe.ingredients.length; i++){
    console.log('-' + recipe.ingredients[i]);
}