export default async function Page({ params }) {
    // throw new Error("Error!")   
  const { slug } = await params
  let languages = ["python", "java", "cpp", "c"]
    if(languages.includes(params.slug)){
        return <div>My Post: {params.slug}</div>
    }
    else{
        return <div>Page Not Found</div>
    }
  return <div>My Post: {slug}</div>
} 