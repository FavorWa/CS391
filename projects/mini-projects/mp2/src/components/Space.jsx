export default function Space(space){
  return(
    <div className='col'>
    <div className='spot'>
    <img
          src={space.img_url}
          alt={space.name}
          className='Final Space'
        />
      <div className="space-body">
        <h1 className='space-title'>{space.name}</h1>
        <h3 className='space-director'>{space.director}</h3>
      </div>
      </div>
    
    </div>
  );
}