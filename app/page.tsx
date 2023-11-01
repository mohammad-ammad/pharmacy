export default function Home() {
  return (
   <div className='bg-[#E9ECEF] w-full h-screen'>
      <div className='flex justify-center items-center flex-col h-screen'>
        <h1 className='text-3xl text-gray-700 font-semibold'>Pharmaceutical<span className='font-normal text-gray-700'>.pk</span></h1>
        <div className='bg-white shadow-md px-5 py-5 mt-3'>
          <form>
            <h2 className="text-sm text-center font-semibold text-gray-600">Sign in to start your session</h2>
            <div className='flex justify-start items-start flex-col'>
              <label htmlFor="" className="text-gray-500 text-sm pb-2">Email</label>
              <input type="text" className='w-[300px] px-2 py-1 outline-none rounded-md' style={{border:"1px solid grey"}} name="" id="" placeholder="Email" />
            </div>
            <div className='flex justify-start items-start flex-col'>
              <label htmlFor="" className="text-gray-500 text-sm py-2">Password</label>
              <input type="text" className='w-[300px] px-2 py-1 outline-none rounded-md' style={{border:"1px solid grey"}} name="" id="" placeholder="Password"/>
            </div>

            <div className="flex justify-between items-center mt-3">
              <div className="flex justify-start items-center">
                <input type="checkbox" className="w-[15px] h-[15px]" name="" id="" />
                <label htmlFor="" className="text-gray-500 text-sm ml-2">Remember Me</label>
              </div>
              <div>
                <button type="submit" className="bg-[#0082d9] text-white px-5 py-2 rounded-md shadow-md">Sign In</button>
              </div>
            </div>

            <div>
              <a href="" className="text-[#0082d9] text-sm">I forgot my password</a>
            </div>
          </form>
        </div>
      </div>
   </div>
  )
}
