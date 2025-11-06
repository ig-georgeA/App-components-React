import { RvRevealView } from 'reveal-sdk-wrappers-react';
import { RevealViewOptions } from 'reveal-sdk-wrappers';
import styles from './reveal.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Reveal() {
  const classes = createClassTransformer(styles);
  const options: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };
  $.ig.RevealSdkSettings.setBaseUrl('https://samples.revealbi.io/upmedia-backend/reveal-api/');
  setRevealTheme();

  function setRevealTheme() {
    const style = window.getComputedStyle(document.body);
    const theme = new $.ig.RevealTheme();
    theme.regularFont = style.getPropertyValue('--ig-font-family')?.trim() || 'sans-serif';
    theme.mediumFont = theme.regularFont;
    theme.boldFont = theme.regularFont;

    const color = style.getPropertyValue('--ig-surface-500').trim() || '#fff';
    const [r, g, b] = [1, 3, 5].map(i => parseInt(color.substring(i, i + 2), 16));
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    theme.isDark = brightness < 128;
    theme.fontColor = theme.isDark ? 'white' : 'black';
    theme.dashboardBackgroundColor = style.getPropertyValue('--ig-gray-100').trim();
    theme.visualizationBackgroundColor = style.getPropertyValue('--ig-surface-500').trim();

    $.ig.RevealSdkSettings.theme = theme;
  }

  return (
    <>
      <div className={classes("row-layout reveal-container")}>
        <div className={classes("group")}>
          <RvRevealView options={options} dashboard="Sales"></RvRevealView>
        </div>
      </div>
    </>
  );
}
