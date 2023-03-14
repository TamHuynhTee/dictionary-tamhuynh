import notFound from '../../../assets/images/not-found.png';

function NotFoundResult({ data }) {
  return (
    <div className="container my-[100px]">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16">
          <img
            src={notFound}
            alt="not-found"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="mt-10 text-dark-2D text-xl font-bold">{data?.title}</p>
        <p className="mt-6 text-gray-75 text-lg text-center">
          {data?.message} {data?.resolution}
        </p>
      </div>
    </div>
  );
}

export default NotFoundResult;
