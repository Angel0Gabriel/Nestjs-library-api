import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class TrimQueryPipe implements PipeTransform {
  transform(value: any) {
    if (typeof value === 'object' && value !== null) {
      const trimmedValue = {};
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          if (typeof value[key] === 'string') {
            trimmedValue[key] = value[key].trim().replace(/\s+/g, ' ');
          } else {
            trimmedValue[key] = value[key];
          }
        }
      }
      return trimmedValue;
    }
    return value;
  }
}
