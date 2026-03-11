 const FetchData = async () => {
      const response = await fetch('https://dummyjson.com/posts')
      const data = await response.json()
      if (data) {
        return data.posts
      }
    }
export default FetchData