package main

import (
	"context"
	"gotrack/internal"
)

type App struct {
	ctx          context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called at application startup
func (a *App) startup(ctx context.Context) {
	// Perform your setup here
	a.ctx = ctx
}

// domReady is called after front-end resources have been loaded
func (a App) domReady(ctx context.Context) {
	// Add your action here
}

// beforeClose is called when the application is about to quit,
// either by clicking the window close button or calling runtime.Quit.
// Returning true will cause the application to continue, false will continue shutdown as normal.
func (a *App) beforeClose(ctx context.Context) (prevent bool) {
	return false
}

// shutdown is called at application termination
func (a *App) shutdown(ctx context.Context) {
	// Perform your teardown here
}

// UpdatePosition will fetch the ISS api and return the new lat and lon
func (a *App) UpdatePosition() []string {
	latLon, err := internal.GetISS()
	if err != nil {
		return []string{"0.00", "0.00"}
	}
	return latLon
}
