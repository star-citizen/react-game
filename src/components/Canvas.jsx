import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';

const Canvas = (props) => {
	const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
	return (
		<svg
			id="aliens-go-home-canvas"
			preserveAspectRatio="xMaxYMax none"
			onMouseMove={props.trackMouse}
			viewBox={viewBox}
		>
		  <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
			<Sky />
			<Ground />
			<CannonPipe rotation={props.angle} />
			<CannonBase />
			<CurrentScore score={15} />
			<FlyingObject position={{x: -150, y: -300}}/>
      <FlyingObject position={{x: 150, y: -300}}/>
		</svg>
	)
};

Canvas.propTypes = {
	angle: PropTypes.number.isRequired,
	trackMouse: PropTypes.func.isRequired,
};

export default Canvas;