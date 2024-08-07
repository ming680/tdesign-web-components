import 'tdesign-web-components/image';
import 'tdesign-web-components/space';
import 'tdesign-web-components/button';
import 'tdesign-web-components/loading';
import 'tdesign-icons-web-components/esm/components/refresh';

import { Component } from 'omi';

export default class ImageLazySingle extends Component {
  loadCount = 0;

  handleReload = () => {
    this.loadCount += 1;
    this.update();
  };

  render() {
    const loading = (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'rgba(255,255,255,.4)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <t-loading
          delay={0}
          fullscreen={false}
          indicator
          inheritColor={false}
          loading
          preventScrollThrough
          showOverlay
          size="small"
        />
      </div>
    );

    return (
      <t-space direction="vertical">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          style={{ width: 284, height: 160 }}
          lazy
          placeholder={<img width="100%" height="100%" src="https://tdesign.gtimg.com/demo/demo-image-5.png" />}
          loading={loading}
          key={this.loadCount}
        />
        <t-button variant="outline" icon={<t-icon-refresh />} onClick={this.handleReload}>
          重演 lazy load
        </t-button>
      </t-space>
    );
  }
}
