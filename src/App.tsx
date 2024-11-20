import './App.css'

function App() {
  const redirectToLocation = () => {
    window.open('https://maps.app.goo.gl/h3o9TsB6HrZdUDWA8', '_blank');
  };

  return (
    <div className='text-gray-600 body-font'>
      <h1 className='text-2xl font-bold text-center'>
        Fujairah Recovery Service
      </h1>
      <p className='text-center px-4'>
        We provide the best car and vehicle towing and pick-up services. You can
        call us anytime in any condition 24/7.
      </p>

      <div className='lg:w-1/2 md:w-2/3 mx-auto'>
        <div className='flex flex-wrap -m-2'>
          <div className='p-2 w-1/2'>
            <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
              ADDRESS
            </h2>
            <p className='mt-1'> Fujairah Recovery, Al Ittihad Rd - Al Ittihad - Fujairah - United Arab Emirates</p>
          </div>
          <div className='p-2 w-1/2'>
            <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
              PHONE
            </h2>
            <p className='leading-relaxed'>+971 50 727 3971 </p>
          </div>
        </div>
      </div>

      <div className='card'>
        <button onClick={redirectToLocation}>Go to Location</button>
      </div>

      <section className='text-gray-600 body-font relative'>
        <div className='container px-5 py-8 mx-auto'>
          <div className='w-full bg-gray-300 rounded-lg overflow-hidden p-6 shadow-lg'>
            <iframe
              width={600}
              height={450}
              title='Fujairah Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.76233580964137!2d56.32716038340081!3d25.12901719552345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4f9ac3e7963db%3A0x20d72e37c306b8dc!2sFujairah%20Recovery!5e0!3m2!1sen!2s!4v1732089133787!5m2!1sen!2s'
              style={{ border: '0' }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
