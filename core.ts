import { test} from '@playwright/test';

const Core = {
    create(name: string, config: any) {
      return (() => {
        test(`${name} API Testing`,() => {
          Object.keys(config.API).map(t => {
            let test = config.API[t]
             test.run()
  
          });
        });
      })();
    },
   
  };
  
  export default Core;
