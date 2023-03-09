# Shell

Create new path inside app.module.ts
    {
        path: 'poll',
        loadChildren: () => import('./poll/poll.module').then(m => m.PollModule),
    }

inside poll.component.html
<!DOCTYPE html>
<html lang="en">

<head>
</head>

<body>
    <framework-poll></framework-poll>
</body>

</html>

Inside poll.component.ts, add this.

  ngOnInit(): void {
    if (!document.getElementById('importednative-shim')) {
      this.importJS('native-shim');
      this.importJS('framework-poll');
    }
  }

  ngOnDestroy(): void {
    this.remoteJS('native-shim');
    this.remoteJS('framework-poll');
  }

  importJS(name) {
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.id = 'imported' + name;
    script.src = 'assets/js/' + name + '.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  remoteJS(name) {
    document.getElementById('imported' + name).remove();
  }
