import {
  NavigationMenuComponent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "./NavigationMenuComponent";
import { CaretDownIcon } from "@radix-ui/react-icons";

const MenuBarExam = () => {
  return (
    <div>
      <h1>Menu Bar Example</h1>
      <NavigationMenuComponent>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Learn <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="navcon1">
              <div className="navimg">
                <img
                  style={{ width: "120%" }}
                  src="https://img.freepik.com/premium-vector/young-man-sitting-with-computer-reading-message-vector-illustration_912214-133662.jpg?ga=GA1.1.1178609761.1724865921&semt=ais_hybrid"
                  alt=""
                />
              </div>

              <span>
                <NavigationMenuLink href="/">
                  <div className="navmenulink">
                    <h4>Stitches</h4>
                    <span>
                      CSS-in-JS with best-in-class developer experience.
                    </span>
                  </div>
                  <div className="navmenulink">
                    <h4>Pages</h4>
                    <span>
                      CSS-in-JS with best-in-class developer experience.
                    </span>
                  </div>
                  <div className="navmenulink">
                    <h4>Portfolio</h4>
                    <span>
                      CSS-in-JS with best-in-class developer experience.
                    </span>
                  </div>
                </NavigationMenuLink>
              </span>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Overview <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="navcon2">
              <NavigationMenuLink href="/">
                <div className="navmenulink">
                  <h4>Stitches</h4>
                  <span>
                    CSS-in-JS with best-in-class developer experience.
                  </span>
                </div>
                <div className="navmenulink">
                  <h4>Pages</h4>
                  <span>
                    CSS-in-JS with best-in-class developer experience.
                  </span>
                </div>
                <div className="navmenulink">
                  <h4>Portfolio</h4>
                  <span>
                    CSS-in-JS with best-in-class developer experience.
                  </span>
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className="navtext"
            href="https://github.com/radix-ui"
          >
            GitHub
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenuComponent>
    </div>
  );
};

export default MenuBarExam;
