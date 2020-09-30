import * as React from 'react';
import Icon, { IconProps } from './icon';

export const Globe: React.FC<IconProps> = (props) => (
    <Icon viewBox="0 0 16 16" className="globe" {...props} >
        <path
            d="M8 .667a7.333 7.333 0 1 0 0 14.666A7.333 7.333 0 0 0 8 .667zM7.55 14.11a6.437 6.437 0 0 1-3.775-1.808A6.233 6.233 0 0 1 1.89 7.828c0-1.522.543-2.961 1.539-4.106.025.303.089.627.073.858-.06.845-.145 1.374.359 2.086.196.278.244.676.34.997.092.314.465.48.722.673.52.39 1.015.845 1.565 1.189.363.227.59.34.484.775-.086.35-.11.566-.294.878-.056.095.212.707.302.795.27.266.54.51.835.75.457.371-.045.854-.263 1.388zm4.948-1.706a6.092 6.092 0 0 1-3.194 1.706 2.57 2.57 0 0 1 .756-1.02c.245-.191.551-.557.68-.847.127-.29.296-.541.468-.807.243-.38-.601-.95-.875-1.07-.616-.27-1.08-.634-1.627-1.022-.39-.276-1.182.145-1.622-.05-.603-.264-1.1-.726-1.625-1.123-.54-.41-.514-.89-.514-1.495.423.016 1.026-.118 1.307.225.09.108.394.592.599.42.167-.14-.124-.704-.18-.836-.173-.407.393-.566.683-.842.378-.36 1.19-.926 1.125-1.184-.064-.258-.811-.99-1.25-.876-.066.017-.645.63-.757.725l.009-.599c.002-.126-.234-.255-.223-.337.028-.205.596-.579.737-.742-.099-.063-.437-.355-.539-.312-.248.104-.527.175-.775.28a1.6 1.6 0 0 0-.022-.249 6.057 6.057 0 0 1 1.563-.457l.486.197.343.41.342.356.3.097.475-.452-.123-.322v-.29c.94.137 1.828.49 2.606 1.036-.14.012-.292.033-.465.055-.07-.042-.162-.061-.24-.091.225.488.46.97.7 1.451.254.515.82 1.067.92 1.61.116.64.035 1.222.1 1.975.061.726.81 1.55.81 1.55s.347.119.635.077a6.172 6.172 0 0 1-1.613 2.853z"
        />
        <g fill="none" fillRule="evenodd">
            <g>
                <path d="M0 0h16v16H0z" />
            </g>
        </g>
    </Icon >
);

export default Globe;