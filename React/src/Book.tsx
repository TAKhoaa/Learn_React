type BookProps = {
    image : string;
    title : string;
    author : string;
}
//Props 
const Book = ({ title, author, image }: BookProps) => {
/*
props = {
    title: '',
    author: '',
    img: ''
}
*/ 
// console.log(props);
// const title = props.title;
// const author = props.author;

//destructuring
// const { title, author, image } = props;

    return <article className="book">
        {/* Image */}
        <img src={image} alt={title}/>
        {/* Title */}
        <h2>{title}</h2>
        {/* Author */}
        <h4>Author: {author}</h4>
    </article>
}

export default Book;