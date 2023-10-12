import React, { useState, useEffect } from 'react';

function Post() {
    const [postData, setPostData] = useState([]);
    const [error, setError] = useState('');
    const [selectedPost, setSelectedPost] = useState(null);

    const fetchPostData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then((response) => response.json())
            .then((data) => {
                setPostData(data);
            })
            .catch((error) => {
                setError('An error occurred while fetching post data.');
            });
    };

    useEffect(() => {
        fetchPostData();
    }, []);

    const showPostDetails = (post) => {
        setSelectedPost(post);
    };

    const closePostDetails = () => {
        setSelectedPost(null);
    };

    return (
        <div className="bg-gray-300 p-4">
            {error && <p className="text-red-600">{error}</p>}
            <ul className="mt-4">
                {postData.map((post) => (
                    <li key={post.id} className="mb-2 p-2 rounded-lg bg-white shadow">
                        <p className="text-lg font-semibold">ID: {post.id}</p>
                        <button
                            className="text-white bg-blue-500 p-1 m-1 rounded cursor-pointer"
                            onClick={() => showPostDetails(post)}
                        >
                            Show Details
                        </button>
                        {selectedPost && selectedPost.id === post.id && (
                            <div>
                                <p className="text-lg font-semibold">Name: {selectedPost.name}</p>
                                <p className="text-base text-green-600">Body: {selectedPost.body}</p>
                                <p className="text-base text-purple-600">Email: {selectedPost.email}</p>
                                <button
                                    className="text-white bg-red-500 rounded p-1 m-1 cursor-pointer"
                                    onClick={closePostDetails}
                                >
                                    Close Details
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Post;
