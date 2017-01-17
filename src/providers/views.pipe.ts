import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatViews'
})
export class ViewsPipe implements PipeTransform {
    transform(value, args) {

        if (value) {
            let newValue: any;
            newValue = parseInt(value);
            let ranges = [
                { divider: 1e18, suffix: 'P' },
                { divider: 1e15, suffix: 'E' },
                { divider: 1e12, suffix: 'T' },
                { divider: 1e9, suffix: 'G' },
                { divider: 1e6, suffix: 'M' },
                { divider: 1e3, suffix: 'K' }
            ];

            for (var i = 0; i < ranges.length; i++) {
                if (newValue >= ranges[i].divider) {
                    if (ranges[i].suffix == 'K') {
                        return (Math.round(newValue / ranges[i].divider)).toString() + ranges[i].suffix;
                    }
                    return ((newValue / ranges[i].divider).toFixed(1)).toString() + ranges[i].suffix;
                }
            }
            return newValue.toString();
        } else {
            return;
        }
    }
}