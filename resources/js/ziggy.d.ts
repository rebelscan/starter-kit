/* This file is generated by Ziggy. */
declare module 'ziggy-js' {
    interface RouteList {
        'debugbar.openhandler': [];
        'debugbar.clockwork': [
            {
                name: 'id';
                required: true;
            },
        ];
        'debugbar.telescope': [
            {
                name: 'id';
                required: true;
            },
        ];
        'debugbar.assets.css': [];
        'debugbar.assets.js': [];
        'debugbar.cache.delete': [
            {
                name: 'key';
                required: true;
            },
            {
                name: 'tags';
                required: false;
            },
        ];
        'debugbar.queries.explain': [];
        'horizon.stats.index': [];
        'horizon.workload.index': [];
        'horizon.masters.index': [];
        'horizon.monitoring.index': [];
        'horizon.monitoring.store': [];
        'horizon.monitoring-tag.paginate': [
            {
                name: 'tag';
                required: true;
            },
        ];
        'horizon.monitoring-tag.destroy': [
            {
                name: 'tag';
                required: true;
            },
        ];
        'horizon.jobs-metrics.index': [];
        'horizon.jobs-metrics.show': [
            {
                name: 'id';
                required: true;
            },
        ];
        'horizon.queues-metrics.index': [];
        'horizon.queues-metrics.show': [
            {
                name: 'id';
                required: true;
            },
        ];
        'horizon.jobs-batches.index': [];
        'horizon.jobs-batches.show': [
            {
                name: 'id';
                required: true;
            },
        ];
        'horizon.jobs-batches.retry': [
            {
                name: 'id';
                required: true;
            },
        ];
        'horizon.pending-jobs.index': [];
        'horizon.completed-jobs.index': [];
        'horizon.silenced-jobs.index': [];
        'horizon.failed-jobs.index': [];
        'horizon.failed-jobs.show': [
            {
                name: 'id';
                required: true;
            },
        ];
        'horizon.retry-jobs.show': [
            {
                name: 'id';
                required: true;
            },
        ];
        'horizon.jobs.show': [
            {
                name: 'id';
                required: true;
            },
        ];
        'horizon.index': [
            {
                name: 'view';
                required: false;
            },
        ];
        'sanctum.csrf-cookie': [];
        telescope: [
            {
                name: 'view';
                required: false;
            },
        ];
        'api.v1.getStock': [];
        'api.v1.XX3DWREITM': [];
        'api.v1.XX3DWL2POH': [];
        'api.v1.XX3DWL1POH': [];
        'api.v1.XX3DWLSLOC': [];
        'api.v1.XX3DWLSFCY': [];
        'api.v1.XX3DWLSMFG': [];
        'api.v1.XX3DWLSMMK': [];
        'api.v1.XX3DWLSOPE': [];
        'api.v1.XX3DWLSWST': [];
        'api.v1.XX3DWREAPL': [];
        'api.v1.XX3DWRESEL': [];
        home: [];
        'activities.index': [];
        'profile.edit': [];
        'profile.update': [];
        'profile.update-password': [];
        'profile.update-site': [];
        'sessions.destroy': [];
        login: [];
        'sessions.store': [];
        'settings.edit': [];
        'settings.update': [];
        'roles.index': [];
        'roles.store': [];
        'roles.edit': [
            {
                name: 'role';
                required: true;
                binding: 'id';
            },
        ];
        'roles.update': [
            {
                name: 'role';
                required: true;
                binding: 'id';
            },
        ];
        'roles.destroy': [
            {
                name: 'role';
                required: true;
                binding: 'id';
            },
        ];
        'roles.makeDefault': [
            {
                name: 'role';
                required: true;
                binding: 'id';
            },
        ];
        'users.index': [];
        'users.store': [];
        'users.update': [
            {
                name: 'user';
                required: true;
                binding: 'id';
            },
        ];
        'users.destroy': [
            {
                name: 'user';
                required: true;
                binding: 'id';
            },
        ];
        'users.update-password': [
            {
                name: 'user';
                required: true;
                binding: 'id';
            },
        ];
        'users.end-sessions': [
            {
                name: 'user';
                required: true;
                binding: 'id';
            },
        ];
        'users.sync': [];
        'reset-password.showForm': [];
        'reset-password.update': [];
        'locations.index': [];
        'locations.store': [];
        '@bin-move.show-form': [];
        '@bin-move.submit-form': [];
        'api.XX3DWLSSNX': [];
        'api.XX3DWLSSNL': [
            {
                name: 'countSession';
                required: true;
            },
        ];
        'assign-counts.index': [];
        'assign-counts.store': [];
        'count-by-location.index': [];
        'count-by-location.show': [
            {
                name: 'countsheet';
                required: true;
                binding: 'id';
            },
        ];
        'counts.start-count': [
            {
                name: 'countsheet';
                required: true;
                binding: 'id';
            },
        ];
        'counts.submit-count': [
            {
                name: 'countsheet';
                required: true;
                binding: 'id';
            },
        ];
        'counts.complete-location': [
            {
                name: 'countsheet';
                required: true;
                binding: 'id';
            },
        ];
        'count-reports.index': [];
        '@deliveries.index': [];
        '@deliveries.ups.printDelivery': [
            {
                name: 'SDHNUM';
                required: true;
            },
        ];
        '@manage.deliveries.index': [];
        '@manage.deliveries.reset': [
            {
                name: 'SDHNUM';
                required: true;
            },
        ];
        'intersite-transfers.show': [];
        'intersite-transfers.store': [];
        '@inventory.byLocation': [];
        '@inventory.byItem': [];
        '@material-issue.create': [];
        '@material-issue.store': [];
        '@misc-issues.index': [];
        '@misc-issues.store': [];
        '@misc-receipts.show': [];
        '@misc-receipts.store': [];
        '@picking-with-delivery.index': [];
        '@picking-with-delivery.show': [
            {
                name: 'SDHNUM';
                required: true;
            },
        ];
        '@picking-with-delivery.store': [
            {
                name: 'SDHNUM';
                required: true;
            },
        ];
        '@picking-with-delivery.destroy': [
            {
                name: 'SDHNUM';
                required: true;
            },
            {
                name: 'assignedDeliveryLine';
                required: true;
                binding: 'id';
            },
        ];
        '@picking-with-delivery.skipLine': [
            {
                name: 'SDHNUM';
                required: true;
            },
            {
                name: 'assignedDeliveryLine';
                required: true;
                binding: 'id';
            },
        ];
        '@picking-with-delivery.summary.show': [
            {
                name: 'SDHNUM';
                required: true;
            },
        ];
        '@picking-with-delivery.summary.store': [
            {
                name: 'SDHNUM';
                required: true;
            },
        ];
        '@production-tracking.create': [];
        '@production-tracking.store': [];
        'putaway.index': [];
        'putaway.store': [];
        'putaway.destroy': [
            {
                name: 'putaway';
                required: true;
                binding: 'id';
            },
        ];
        'putaway-details.index': [
            {
                name: 'putaway';
                required: true;
                binding: 'id';
            },
        ];
        'putaway-details.store': [
            {
                name: 'putaway';
                required: true;
                binding: 'id';
            },
        ];
        'putaway-details.destroy': [
            {
                name: 'putaway';
                required: true;
                binding: 'id';
            },
            {
                name: 'detail';
                required: true;
                binding: 'id';
            },
        ];
        'putaway.submit': [
            {
                name: 'putaway';
                required: true;
                binding: 'id';
            },
            {
                name: 'location';
                required: true;
            },
        ];
        'putaway.process.index': [
            {
                name: 'putaway';
                required: true;
                binding: 'id';
            },
        ];
        '@receiving.index': [];
        '@receiving.store': [];
        '@receiving.destroy': [
            {
                name: 'receiving';
                required: true;
                binding: 'id';
            },
        ];
        '@receiving.detail.index': [
            {
                name: 'receipt';
                required: true;
                binding: 'id';
            },
        ];
        '@receiving.detail.store': [
            {
                name: 'receipt';
                required: true;
                binding: 'id';
            },
        ];
        '@receiving.detail.destroy': [
            {
                name: 'receipt';
                required: true;
                binding: 'id';
            },
            {
                name: 'detail';
                required: true;
                binding: 'id';
            },
        ];
        '@receiving.submit': [
            {
                name: 'receipt';
                required: true;
                binding: 'id';
            },
        ];
        '@reintegration.create': [];
        '@reintegration.store': [];
        'work-order.start.index': [];
        'work-order.start.store': [];
        'work-order.stop.index': [];
        'work-order.stop.store': [];
        'clock-in.index': [];
        'clock-in.store': [];
        'clock-out.index': [];
        'clock-out.store': [];
        '@split-pallets.index': [];
        '@split-pallets.store': [];
        '@stock-change.create': [];
        '@stock-change.store': [];
        '@truck-loading.create': [];
        '@truck-loading.store': [];
        'storage.local': [
            {
                name: 'path';
                required: true;
            },
        ];
    }
}
export {};
