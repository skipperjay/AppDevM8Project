import { Foo } from './foo/foo'; // Changed FooComponent to Foo
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [Foo], // Changed FooComponent to Foo here too
    templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('cli1');
}