// This allows us to use styles in our project -- will not appear if not included!
import './style.css';
import UI from './modules/UI';

// Use a class upon initialization to populate data
const homepage = new UI();
homepage.loadUI();
