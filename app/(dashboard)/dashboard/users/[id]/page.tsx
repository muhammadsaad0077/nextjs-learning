
const Page = ({params}: {params: {id: string}}) => {
    const {id} = params;
  return (
    <div>
      <h1>User {id} Detail Page</h1>
    </div>
  )
}

export default Page
