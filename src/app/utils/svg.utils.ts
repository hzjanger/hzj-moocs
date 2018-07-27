import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

export const loadSvgResource = (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
  const imgUrl = 'assets/img';
  const sidebar = `${imgUrl}/sidebar`;
  const dayUrl = `${imgUrl}/days`;
  const avatarUrl = `${imgUrl}/avatar`;
  iconRegistry.addSvgIconSetInNamespace('avatars', sanitizer.bypassSecurityTrustResourceUrl(`${avatarUrl}/avatars.svg`));
  iconRegistry.addSvgIcon('day', sanitizer.bypassSecurityTrustResourceUrl(`${sidebar}/day.svg`))
  iconRegistry.addSvgIcon('month', sanitizer.bypassSecurityTrustResourceUrl(`${sidebar}/month.svg`))
  iconRegistry.addSvgIcon('project', sanitizer.bypassSecurityTrustResourceUrl(`${sidebar}/project.svg`))
  iconRegistry.addSvgIcon('projects', sanitizer.bypassSecurityTrustResourceUrl(`${sidebar}/projects.svg`))
  iconRegistry.addSvgIcon('week', sanitizer.bypassSecurityTrustResourceUrl(`${sidebar}/week.svg`))
  iconRegistry.addSvgIcon('gifts', sanitizer.bypassSecurityTrustResourceUrl(`${sidebar}/day.svg`))
  iconRegistry.addSvgIcon( 'aaa', sanitizer.bypassSecurityTrustResourceUrl(`${imgUrl}/日期.svg`))

  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ];
  days.forEach(d => iconRegistry.addSvgIcon(`day${d}`, sanitizer.bypassSecurityTrustResourceUrl(`${dayUrl}/day${d}.svg`)))
};
