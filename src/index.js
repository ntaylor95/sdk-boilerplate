import { post as Widget1Post }  from './widget1Service';
import { get as Widget2Get, post as Widegt2Post } from './widget2Service';

const widget1Post = async (id, title) => {
    return Widget1Post(id, title);
}

const widget2Get = async (id) => {
    return Widget2Get(id);
}

const widget2Post = (id) => {
    return Widegt2Post(id);
}

export {
   widget1Post,
   widget2Post,
   widget2Get
};
