import {View} from 'erste';

export default class DetailView extends View {
    constructor(show) {
        super();

        this.show = show;
        this.supportsBackGesture = true;
    }

    onAfterRender() {
      // WORKS you can type immediately - input is focused
      // setTimeout(() => {
      //   this.$('input') && this.$('input').focus();
      // }, 0)

      // DOES NOT WORK
      // you need to manually focus to open the keyboard
      this.$('input') && this.$('input').focus();
  }

    onTap(e) {
        console.log(`tapping ${this.show.title}`);
    };

    template() {
        var show = this.show;
        var imgFile = show['images']['fanart'].split('/').slice(-1);

        return `
<view class="detail-view">
    <detail-background
        style="background-image: url(static/img/poster/${imgFile})">
        <div class="info">
            <p>Title: ${show.title}</p>
            <p>Year: ${show.year}</p>
            <p># of seasons: ${show.num_seasons}</p>
            <input type='text'></input>
        </div>
    </detail-background>
</view>
`;
    }

    get events() {
        return {
            'tap': {
                '.detail-view': this.onTap
            }
        };
    };
}
