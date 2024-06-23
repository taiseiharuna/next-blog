// type
import PostType from "../../types/PostOnListType"
// component
import CommImage from "../atoms/image/CommImage"
import CategoryLabel from "../atoms/label/CategoryLabel"
import ArticleOnListHeading from "../atoms/text/ArticleOnListHeading"
import DateText from "../atoms/text/DateText"

const PostBox = ({ post }: {
    post: PostType
}) => {
    return (
        <article className='shadow-sm shadow-gray-200'>
            <div>
                <CommImage 
                    src={post.featuredImage.url}
                    alt=""
                    className="w-full h-56" />
            </div>
            <div className='py-4 px-5'>
                <div className="flex mb-2">
                    <div className="mr-2">
                        <CategoryLabel>{post.category.name}</CategoryLabel>
                    </div>
                    <DateText>{post.date}</DateText>
                </div>
                <div className="mb-2">
                <ArticleOnListHeading>{post.title}</ArticleOnListHeading>
                </div>
                <div dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
            </div>
        </article>
    );
}

export default PostBox