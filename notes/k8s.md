## important commands ##
general
- kubectl create [type] name
- kubectl create -f file.yml
- kubectl apply -f file.yml
- kubectl run myPod --image=myimage --dry-run=client -o yaml > definition.yaml
- kubectl get pods/replicaset/
- kubectl describe pod (label)
- kubectl scale --replicas=6 -f replicaset-definition.yml
    - will only update file, not apply
- kubectl scale --replicas=6 replicaset myapp-replicaset
- kebectl [command] --namespace=[namespace]

imperative commands
- https://learn.kodekloud.com/user/courses/certified-kubernetes-application-developer-ckad/module/eae8cedf-d483-471f-8796-49f69baec6cf/lesson/c1002aef-471a-4249-b963-e3071fbbbdcb
- https://kubernetes.io/docs/reference/kubectl/conventions/
- https://kubernetes.io/docs/reference/kubectl/quick-referenc-e/
- kubectl get pod -o yaml > pod-definition.yaml
    --o yaml, output yaml of resource definition
- kubectl run pod --dry-run=client
- kubectl run nginx --image=nginx --dry-run=client -o yaml
    - quickly get pod manifest file

selecting fields
- -o jsonpath='{.spec.containers[*].env}'

config
- kubectl config set-context $(kubectl config current-context) --namespace=dev
    --all-namespaces

## come back later ##
- encrypting secrets at rest

## pods ##
```yaml
apiVersion: v1 # string, version of k8s api using (v1)
kind: Pod # string, type of object creating (Pod - UPPERCASE)
metadata: # ...dict, info about resource
    name: myApp-pod
    labels: # dict, any key and value pairs
        app: myApp
spec: # what's inside object creating
    containers: # list, can have multiple containers
    -   name: nginx-container
        image: (nginx)
```

## replicas ##
arch
- node
    - replication controller/replica set
        - pods
- node
    - replication controller/replica set (same one)
        - pods

notes
- use labels for replica set to know which pods to monitor

Replica Controller:
```yaml
apiVersion: v1 # string, version of k8s api using (v1)
kind: ReplicationController # or ReplicaSet
metadata: # ...dict, info about resource
    name: myApp-rc
    labels: # dict, any key and value pairs
        app: myApp
spec:
    template: 
        # --------------- def from pod file ----------------
        metadata: # ...dict, info about resource
            name: myApp-pod
            labels: 
                app: myApp
        spec: 
            containers: 
            -   name: nginx-container
                image: (nginx)
        # ---------------------------------------------------
    replicas: 3
```

Replica Set:
```yaml
apiVersion: apps/v1 # app/ for replica set
kind: ReplicaSet 
metadata: # ...dict, info about resource
    name: myApp-replicaset
    labels: # dict, any key and value pairs
        app: myApp
spec:
    template: 
        # --------------- def from pod file ----------------
        metadata: # ...dict, info about resource
            name: myApp-pod
            labels: 
                app: myApp
        spec: 
            containers: 
            -   name: nginx-container
                image: (nginx)
        # ---------------------------------------------------
    replicas: 3
    selector: # main difference, not necessary in replica controller
        matchLabels:
            type: front-end
```

## Deployment

```yaml
apiVersion: apps/v1 # app/ for replica set
kind: Deployment 
metadata: # ...dict, info about resource
    name: myApp-replicaset
    labels: # dict, any key and value pairs
        app: myApp
spec:
    template: 
        # --------------- def from pod file ----------------
        metadata: # ...dict, info about resource
            name: myApp-pod
            labels: 
                app: myApp
        spec: 
            containers: 
            -   name: nginx-container
                image: (nginx)
        # ---------------------------------------------------
    replicas: 3
    selector: # main difference, not necessary in replica controller
        matchLabels:
            type: front-end
```

```yaml
apiVersion: apps/v1 # app/ for replica set
kind: Deployment 
metadata: # ...dict, info about resource
    name: httpd-frontend
    labels: # dict, any key and value pairs
        app: myApp
spec:
    template: 
        # --------------- def from pod file ----------------
        metadata: # ...dict, info about resource
            name: myApp-pod
            labels: 
                type: front-end
        spec: 
            containers: 
            -   name: httpd
                image: httpd:2.4-alpine
        # ---------------------------------------------------
    replicas: 3
    selector: # main difference, not necessary in replica controller
        matchLabels:
            type: front-end
```

## namespaces ##

```yaml
apiVersion: v1
kind: Namespace 
metadata: 
    name: dev
```

## services ##

NodePort
```yaml
apiVersion: v1 
kind: Service 
metadata: 
    name: myapp-service

spec:
    type: NodePort
    ports:
    -   targetPort: 80
        port: 80
        nodePort: 30008
    selector:
        app: myapp
        type: front-end
```

ClusterIP
NodePort
```yaml
apiVersion: v1 
kind: Service 
metadata: 
    name: back-end

spec:
    type: ClusterIP
    ports:
    -   targetPort: 80
        port: 80
    selector:
        app: myapp
        type: back-end
```

## commands and arguments ##
<<<<<<< HEAD
```yaml
spec: 
    containers: 
    -   name: nginx-container
        image: (nginx)
        args: [arg1, arg2] # overrides 'CMD' instruction in dockerfile
        command: [cmd1, cmd2] # overrides 'ENTRYPOINT' instruction in dockerfile
```

## env variables ##
key-value
```yaml
spec: 
    containers: 
    -   ...
        env:
        -   name: APP_COLOR
            value: pink
```
ConfigMap
```yaml
spec: 
    containers: 
    -   ...
        env:
        -   name: APP_COLOR
            valueFrom:
                configMapKeyRef:
                    name: app-config
                    key: APP_COLOR
        # or
        envFrom:
            - configMapRef:
                name: app-config
        # or
            - secretRef:
                name: app-secret
```

creating configmap:
- imperative:
    - kubectl create configmap <config-name> \
        --from-literal=<key>=<value>
    - kubectl create configmap <config-name> \
        --from-file=<path-to-file>

kubectl create configmap webapp-config-map \
        --from-literal=APP_COLOR=darkblue \
        --from-literal=APP_OTHER=disregard

- declarative
```yaml
apiVersion: v1 
kind: ConfigMap
metadata: 
    name: app-config
data:
    KEY: val
```

Secrets
```yaml
spec: 
    containers: 
    -   ...
        env:
        -   name: APP_COLOR
            valueFrom:
                configMapKeyRef:
```

```yaml
apiVersion: v1 
kind: Secret
metadata: 
    name: app-secret
data:
    KEY: val
```
kubectl create secret generic app-secret \
    --from-file=app_secret.properties

kubectl create secret generic db-secret \
    --from-literal=DB_Host=sql01 \
    --from-literal=DB_User=root \
    --from-literal=DB_Password=password123

creating secrets
-   echo -n 'secret' | base64 (--decode)

as volume:
```yaml
volumes:
-   name: app-secret-volume
    secret:
        secretName: app-secret
```
/opt/app-secret-volumes/secret

=======
- spec.containers[0].args
    - overrides "CMD" instruction
- spec.containers[0].command
    - overrides "ENTRYPOINT" instruction



## docker security ##
- container and host share kernel
- containers isolated used namespaces in linux (what does this mean?)
- processes
    - run on host but isolated using it's own namespace
        - ps aux
            - list processes, in docker can only see processes with it's namespace
            - on host, will list container processes too
- users
    - by default, run processes as root user
        - BUT: root user on container is limited, not really "root"
    - docker run --user=1001 ubuntu sleep 3600
    ```dockerfile
        FROM ubuntu
        USER 1000
    ```

## security contexts ##
```yaml
spec: # pod manifest
    securityContext:
        runAsUser: 1000
    # or
    containers:
    -   name: ubuntu
        image: ubuntu
        command: ...
        securityContext:
            runAsUser: 1000
            capabilities:
                add: ["Mac_ADMIN"]
```

users and stuff
- kubectl exec ubuntu-sleeper -- whoami
    - check user running in container


## resources ##
- every pod needs resources: cpu, memory
- when pod placed on node, consumes resources from node
- scheduler decides which pod node goes to
    - considers amount of resources rquired and avail on nodes
        - decides best node based on resources
    - if none available, holds back scheduling pod - pending state
        - check events: "insufficient cpu"

requesting resources
- resource requests: minimum cpu/mem request by container (pod?)
    - 1cpu/1Gi
- 1 cpu = 1 vcpu
    - 1 cpu core/hyperthread, or AWS vCPU / GCP vCPU
- G = Gigabyte = 1,000,000,000 bytes
- Gi = Gibibyte = 1,073,..... bytes

exceeding limits
- cpu: cpu will be throttled
- memory: terminate pod Out of Memory (OOM)

```yaml
spec: # pod manifest
    resources:
        requests: # minimum resources
            memory: "4Gi"
            cpu: 2
        limits: # maximum resources
            memory: "2Gi"
            cpu: 2
```

limit range:
```yaml
apiVersion: v1
kind: LimitRange
metadata:
    name: cpu-resource-constraint
spec:
    limits:
    -   default:
            cpu: 500m
        defaultRequest:
            cpu: 500m
        max:
            cpu: "1"
        min:
            cpu: 100m
        type: Container
```
- only enforced when pod created

resource quota:
```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
    name: my-resource-quota
spec:
    hard:
        requests.cpu: 4
        requests.memory: 4Gi
        limit.cpu: 10
        limits.memory: 10Gi
```