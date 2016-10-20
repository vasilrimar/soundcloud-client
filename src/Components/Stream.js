import React, { Component } from 'react';

function Stream({ tracks = []}) {
	console.log(tracks);

	return (
		<div>
			{
				tracks.map((track, key) => {
					return <div className="track" key={key}> { track.title } </div>		
				})
			}
		</div>
	)
}


export default Stream;